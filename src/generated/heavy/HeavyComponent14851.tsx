'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14851<T> = T extends (infer U)[]
  ? DeepReadonlyArray14851<U>
  : T extends object
  ? DeepReadonlyObject14851<T>
  : T;

interface DeepReadonlyArray14851<T> extends ReadonlyArray<DeepReadonly14851<T>> {}

type DeepReadonlyObject14851<T> = {
  readonly [P in keyof T]: DeepReadonly14851<T[P]>;
};

type UnionToIntersection14851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14851<T> = UnionToIntersection14851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14851<T extends unknown[], V> = [...T, V];

type TuplifyUnion14851<T, L = LastOf14851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14851<TuplifyUnion14851<Exclude<T, L>>, L>;

type DeepPartial14851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14851<T[P]> }
  : T;

type Paths14851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14851<K, Paths14851<T[K], Prev14851[D]>> : never }[keyof T]
  : never;

type Prev14851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14851 {
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

type ConfigPaths14851 = Paths14851<NestedConfig14851>;

interface HeavyProps14851 {
  config: DeepPartial14851<NestedConfig14851>;
  path?: ConfigPaths14851;
}

const HeavyComponent14851 = memo(function HeavyComponent14851({ config }: HeavyProps14851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14851.displayName = 'HeavyComponent14851';
export default HeavyComponent14851;
