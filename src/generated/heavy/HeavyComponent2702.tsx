'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2702<T> = T extends (infer U)[]
  ? DeepReadonlyArray2702<U>
  : T extends object
  ? DeepReadonlyObject2702<T>
  : T;

interface DeepReadonlyArray2702<T> extends ReadonlyArray<DeepReadonly2702<T>> {}

type DeepReadonlyObject2702<T> = {
  readonly [P in keyof T]: DeepReadonly2702<T[P]>;
};

type UnionToIntersection2702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2702<T> = UnionToIntersection2702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2702<T extends unknown[], V> = [...T, V];

type TuplifyUnion2702<T, L = LastOf2702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2702<TuplifyUnion2702<Exclude<T, L>>, L>;

type DeepPartial2702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2702<T[P]> }
  : T;

type Paths2702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2702<K, Paths2702<T[K], Prev2702[D]>> : never }[keyof T]
  : never;

type Prev2702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2702 {
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

type ConfigPaths2702 = Paths2702<NestedConfig2702>;

interface HeavyProps2702 {
  config: DeepPartial2702<NestedConfig2702>;
  path?: ConfigPaths2702;
}

const HeavyComponent2702 = memo(function HeavyComponent2702({ config }: HeavyProps2702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2702.displayName = 'HeavyComponent2702';
export default HeavyComponent2702;
