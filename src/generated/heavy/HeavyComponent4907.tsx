'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4907<T> = T extends (infer U)[]
  ? DeepReadonlyArray4907<U>
  : T extends object
  ? DeepReadonlyObject4907<T>
  : T;

interface DeepReadonlyArray4907<T> extends ReadonlyArray<DeepReadonly4907<T>> {}

type DeepReadonlyObject4907<T> = {
  readonly [P in keyof T]: DeepReadonly4907<T[P]>;
};

type UnionToIntersection4907<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4907<T> = UnionToIntersection4907<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4907<T extends unknown[], V> = [...T, V];

type TuplifyUnion4907<T, L = LastOf4907<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4907<TuplifyUnion4907<Exclude<T, L>>, L>;

type DeepPartial4907<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4907<T[P]> }
  : T;

type Paths4907<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4907<K, Paths4907<T[K], Prev4907[D]>> : never }[keyof T]
  : never;

type Prev4907 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4907<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4907 {
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

type ConfigPaths4907 = Paths4907<NestedConfig4907>;

interface HeavyProps4907 {
  config: DeepPartial4907<NestedConfig4907>;
  path?: ConfigPaths4907;
}

const HeavyComponent4907 = memo(function HeavyComponent4907({ config }: HeavyProps4907) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4907) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4907 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4907: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4907.displayName = 'HeavyComponent4907';
export default HeavyComponent4907;
