'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14717<T> = T extends (infer U)[]
  ? DeepReadonlyArray14717<U>
  : T extends object
  ? DeepReadonlyObject14717<T>
  : T;

interface DeepReadonlyArray14717<T> extends ReadonlyArray<DeepReadonly14717<T>> {}

type DeepReadonlyObject14717<T> = {
  readonly [P in keyof T]: DeepReadonly14717<T[P]>;
};

type UnionToIntersection14717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14717<T> = UnionToIntersection14717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14717<T extends unknown[], V> = [...T, V];

type TuplifyUnion14717<T, L = LastOf14717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14717<TuplifyUnion14717<Exclude<T, L>>, L>;

type DeepPartial14717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14717<T[P]> }
  : T;

type Paths14717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14717<K, Paths14717<T[K], Prev14717[D]>> : never }[keyof T]
  : never;

type Prev14717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14717 {
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

type ConfigPaths14717 = Paths14717<NestedConfig14717>;

interface HeavyProps14717 {
  config: DeepPartial14717<NestedConfig14717>;
  path?: ConfigPaths14717;
}

const HeavyComponent14717 = memo(function HeavyComponent14717({ config }: HeavyProps14717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14717.displayName = 'HeavyComponent14717';
export default HeavyComponent14717;
