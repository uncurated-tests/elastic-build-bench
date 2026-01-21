'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3387<T> = T extends (infer U)[]
  ? DeepReadonlyArray3387<U>
  : T extends object
  ? DeepReadonlyObject3387<T>
  : T;

interface DeepReadonlyArray3387<T> extends ReadonlyArray<DeepReadonly3387<T>> {}

type DeepReadonlyObject3387<T> = {
  readonly [P in keyof T]: DeepReadonly3387<T[P]>;
};

type UnionToIntersection3387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3387<T> = UnionToIntersection3387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3387<T extends unknown[], V> = [...T, V];

type TuplifyUnion3387<T, L = LastOf3387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3387<TuplifyUnion3387<Exclude<T, L>>, L>;

type DeepPartial3387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3387<T[P]> }
  : T;

type Paths3387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3387<K, Paths3387<T[K], Prev3387[D]>> : never }[keyof T]
  : never;

type Prev3387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3387 {
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

type ConfigPaths3387 = Paths3387<NestedConfig3387>;

interface HeavyProps3387 {
  config: DeepPartial3387<NestedConfig3387>;
  path?: ConfigPaths3387;
}

const HeavyComponent3387 = memo(function HeavyComponent3387({ config }: HeavyProps3387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3387.displayName = 'HeavyComponent3387';
export default HeavyComponent3387;
