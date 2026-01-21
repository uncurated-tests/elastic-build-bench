'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3647<T> = T extends (infer U)[]
  ? DeepReadonlyArray3647<U>
  : T extends object
  ? DeepReadonlyObject3647<T>
  : T;

interface DeepReadonlyArray3647<T> extends ReadonlyArray<DeepReadonly3647<T>> {}

type DeepReadonlyObject3647<T> = {
  readonly [P in keyof T]: DeepReadonly3647<T[P]>;
};

type UnionToIntersection3647<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3647<T> = UnionToIntersection3647<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3647<T extends unknown[], V> = [...T, V];

type TuplifyUnion3647<T, L = LastOf3647<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3647<TuplifyUnion3647<Exclude<T, L>>, L>;

type DeepPartial3647<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3647<T[P]> }
  : T;

type Paths3647<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3647<K, Paths3647<T[K], Prev3647[D]>> : never }[keyof T]
  : never;

type Prev3647 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3647<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3647 {
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

type ConfigPaths3647 = Paths3647<NestedConfig3647>;

interface HeavyProps3647 {
  config: DeepPartial3647<NestedConfig3647>;
  path?: ConfigPaths3647;
}

const HeavyComponent3647 = memo(function HeavyComponent3647({ config }: HeavyProps3647) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3647) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3647 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3647: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3647.displayName = 'HeavyComponent3647';
export default HeavyComponent3647;
