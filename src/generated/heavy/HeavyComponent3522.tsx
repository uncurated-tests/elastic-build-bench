'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3522<T> = T extends (infer U)[]
  ? DeepReadonlyArray3522<U>
  : T extends object
  ? DeepReadonlyObject3522<T>
  : T;

interface DeepReadonlyArray3522<T> extends ReadonlyArray<DeepReadonly3522<T>> {}

type DeepReadonlyObject3522<T> = {
  readonly [P in keyof T]: DeepReadonly3522<T[P]>;
};

type UnionToIntersection3522<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3522<T> = UnionToIntersection3522<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3522<T extends unknown[], V> = [...T, V];

type TuplifyUnion3522<T, L = LastOf3522<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3522<TuplifyUnion3522<Exclude<T, L>>, L>;

type DeepPartial3522<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3522<T[P]> }
  : T;

type Paths3522<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3522<K, Paths3522<T[K], Prev3522[D]>> : never }[keyof T]
  : never;

type Prev3522 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3522<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3522 {
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

type ConfigPaths3522 = Paths3522<NestedConfig3522>;

interface HeavyProps3522 {
  config: DeepPartial3522<NestedConfig3522>;
  path?: ConfigPaths3522;
}

const HeavyComponent3522 = memo(function HeavyComponent3522({ config }: HeavyProps3522) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3522) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3522 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3522: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3522.displayName = 'HeavyComponent3522';
export default HeavyComponent3522;
