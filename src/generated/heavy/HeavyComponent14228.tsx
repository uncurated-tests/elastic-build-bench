'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14228<T> = T extends (infer U)[]
  ? DeepReadonlyArray14228<U>
  : T extends object
  ? DeepReadonlyObject14228<T>
  : T;

interface DeepReadonlyArray14228<T> extends ReadonlyArray<DeepReadonly14228<T>> {}

type DeepReadonlyObject14228<T> = {
  readonly [P in keyof T]: DeepReadonly14228<T[P]>;
};

type UnionToIntersection14228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14228<T> = UnionToIntersection14228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14228<T extends unknown[], V> = [...T, V];

type TuplifyUnion14228<T, L = LastOf14228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14228<TuplifyUnion14228<Exclude<T, L>>, L>;

type DeepPartial14228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14228<T[P]> }
  : T;

type Paths14228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14228<K, Paths14228<T[K], Prev14228[D]>> : never }[keyof T]
  : never;

type Prev14228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14228 {
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

type ConfigPaths14228 = Paths14228<NestedConfig14228>;

interface HeavyProps14228 {
  config: DeepPartial14228<NestedConfig14228>;
  path?: ConfigPaths14228;
}

const HeavyComponent14228 = memo(function HeavyComponent14228({ config }: HeavyProps14228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14228.displayName = 'HeavyComponent14228';
export default HeavyComponent14228;
