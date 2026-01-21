'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly111<T> = T extends (infer U)[]
  ? DeepReadonlyArray111<U>
  : T extends object
  ? DeepReadonlyObject111<T>
  : T;

interface DeepReadonlyArray111<T> extends ReadonlyArray<DeepReadonly111<T>> {}

type DeepReadonlyObject111<T> = {
  readonly [P in keyof T]: DeepReadonly111<T[P]>;
};

type UnionToIntersection111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf111<T> = UnionToIntersection111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push111<T extends unknown[], V> = [...T, V];

type TuplifyUnion111<T, L = LastOf111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push111<TuplifyUnion111<Exclude<T, L>>, L>;

type DeepPartial111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial111<T[P]> }
  : T;

type Paths111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join111<K, Paths111<T[K], Prev111[D]>> : never }[keyof T]
  : never;

type Prev111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig111 {
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

type ConfigPaths111 = Paths111<NestedConfig111>;

interface HeavyProps111 {
  config: DeepPartial111<NestedConfig111>;
  path?: ConfigPaths111;
}

const HeavyComponent111 = memo(function HeavyComponent111({ config }: HeavyProps111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent111.displayName = 'HeavyComponent111';
export default HeavyComponent111;
