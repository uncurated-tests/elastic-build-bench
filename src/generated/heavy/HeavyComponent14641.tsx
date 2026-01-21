'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14641<T> = T extends (infer U)[]
  ? DeepReadonlyArray14641<U>
  : T extends object
  ? DeepReadonlyObject14641<T>
  : T;

interface DeepReadonlyArray14641<T> extends ReadonlyArray<DeepReadonly14641<T>> {}

type DeepReadonlyObject14641<T> = {
  readonly [P in keyof T]: DeepReadonly14641<T[P]>;
};

type UnionToIntersection14641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14641<T> = UnionToIntersection14641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14641<T extends unknown[], V> = [...T, V];

type TuplifyUnion14641<T, L = LastOf14641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14641<TuplifyUnion14641<Exclude<T, L>>, L>;

type DeepPartial14641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14641<T[P]> }
  : T;

type Paths14641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14641<K, Paths14641<T[K], Prev14641[D]>> : never }[keyof T]
  : never;

type Prev14641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14641 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14641 = Paths14641<NestedConfig14641>;

interface HeavyProps14641 {
  config: DeepPartial14641<NestedConfig14641>;
  path?: ConfigPaths14641;
}

const HeavyComponent14641 = memo(function HeavyComponent14641({ config }: HeavyProps14641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14641.displayName = 'HeavyComponent14641';
export default HeavyComponent14641;
