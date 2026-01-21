'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3479<T> = T extends (infer U)[]
  ? DeepReadonlyArray3479<U>
  : T extends object
  ? DeepReadonlyObject3479<T>
  : T;

interface DeepReadonlyArray3479<T> extends ReadonlyArray<DeepReadonly3479<T>> {}

type DeepReadonlyObject3479<T> = {
  readonly [P in keyof T]: DeepReadonly3479<T[P]>;
};

type UnionToIntersection3479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3479<T> = UnionToIntersection3479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3479<T extends unknown[], V> = [...T, V];

type TuplifyUnion3479<T, L = LastOf3479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3479<TuplifyUnion3479<Exclude<T, L>>, L>;

type DeepPartial3479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3479<T[P]> }
  : T;

type Paths3479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3479<K, Paths3479<T[K], Prev3479[D]>> : never }[keyof T]
  : never;

type Prev3479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3479 {
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

type ConfigPaths3479 = Paths3479<NestedConfig3479>;

interface HeavyProps3479 {
  config: DeepPartial3479<NestedConfig3479>;
  path?: ConfigPaths3479;
}

const HeavyComponent3479 = memo(function HeavyComponent3479({ config }: HeavyProps3479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3479.displayName = 'HeavyComponent3479';
export default HeavyComponent3479;
