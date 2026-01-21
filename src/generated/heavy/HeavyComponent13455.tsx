'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13455<T> = T extends (infer U)[]
  ? DeepReadonlyArray13455<U>
  : T extends object
  ? DeepReadonlyObject13455<T>
  : T;

interface DeepReadonlyArray13455<T> extends ReadonlyArray<DeepReadonly13455<T>> {}

type DeepReadonlyObject13455<T> = {
  readonly [P in keyof T]: DeepReadonly13455<T[P]>;
};

type UnionToIntersection13455<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13455<T> = UnionToIntersection13455<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13455<T extends unknown[], V> = [...T, V];

type TuplifyUnion13455<T, L = LastOf13455<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13455<TuplifyUnion13455<Exclude<T, L>>, L>;

type DeepPartial13455<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13455<T[P]> }
  : T;

type Paths13455<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13455<K, Paths13455<T[K], Prev13455[D]>> : never }[keyof T]
  : never;

type Prev13455 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13455<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13455 {
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

type ConfigPaths13455 = Paths13455<NestedConfig13455>;

interface HeavyProps13455 {
  config: DeepPartial13455<NestedConfig13455>;
  path?: ConfigPaths13455;
}

const HeavyComponent13455 = memo(function HeavyComponent13455({ config }: HeavyProps13455) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13455) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13455 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13455: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13455.displayName = 'HeavyComponent13455';
export default HeavyComponent13455;
