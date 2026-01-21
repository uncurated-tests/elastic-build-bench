'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13439<T> = T extends (infer U)[]
  ? DeepReadonlyArray13439<U>
  : T extends object
  ? DeepReadonlyObject13439<T>
  : T;

interface DeepReadonlyArray13439<T> extends ReadonlyArray<DeepReadonly13439<T>> {}

type DeepReadonlyObject13439<T> = {
  readonly [P in keyof T]: DeepReadonly13439<T[P]>;
};

type UnionToIntersection13439<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13439<T> = UnionToIntersection13439<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13439<T extends unknown[], V> = [...T, V];

type TuplifyUnion13439<T, L = LastOf13439<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13439<TuplifyUnion13439<Exclude<T, L>>, L>;

type DeepPartial13439<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13439<T[P]> }
  : T;

type Paths13439<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13439<K, Paths13439<T[K], Prev13439[D]>> : never }[keyof T]
  : never;

type Prev13439 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13439<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13439 {
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

type ConfigPaths13439 = Paths13439<NestedConfig13439>;

interface HeavyProps13439 {
  config: DeepPartial13439<NestedConfig13439>;
  path?: ConfigPaths13439;
}

const HeavyComponent13439 = memo(function HeavyComponent13439({ config }: HeavyProps13439) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13439) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13439 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13439: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13439.displayName = 'HeavyComponent13439';
export default HeavyComponent13439;
