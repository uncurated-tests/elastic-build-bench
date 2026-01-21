'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13719<T> = T extends (infer U)[]
  ? DeepReadonlyArray13719<U>
  : T extends object
  ? DeepReadonlyObject13719<T>
  : T;

interface DeepReadonlyArray13719<T> extends ReadonlyArray<DeepReadonly13719<T>> {}

type DeepReadonlyObject13719<T> = {
  readonly [P in keyof T]: DeepReadonly13719<T[P]>;
};

type UnionToIntersection13719<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13719<T> = UnionToIntersection13719<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13719<T extends unknown[], V> = [...T, V];

type TuplifyUnion13719<T, L = LastOf13719<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13719<TuplifyUnion13719<Exclude<T, L>>, L>;

type DeepPartial13719<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13719<T[P]> }
  : T;

type Paths13719<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13719<K, Paths13719<T[K], Prev13719[D]>> : never }[keyof T]
  : never;

type Prev13719 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13719<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13719 {
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

type ConfigPaths13719 = Paths13719<NestedConfig13719>;

interface HeavyProps13719 {
  config: DeepPartial13719<NestedConfig13719>;
  path?: ConfigPaths13719;
}

const HeavyComponent13719 = memo(function HeavyComponent13719({ config }: HeavyProps13719) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13719) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13719 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13719: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13719.displayName = 'HeavyComponent13719';
export default HeavyComponent13719;
