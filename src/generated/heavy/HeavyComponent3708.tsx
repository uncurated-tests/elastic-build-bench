'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3708<T> = T extends (infer U)[]
  ? DeepReadonlyArray3708<U>
  : T extends object
  ? DeepReadonlyObject3708<T>
  : T;

interface DeepReadonlyArray3708<T> extends ReadonlyArray<DeepReadonly3708<T>> {}

type DeepReadonlyObject3708<T> = {
  readonly [P in keyof T]: DeepReadonly3708<T[P]>;
};

type UnionToIntersection3708<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3708<T> = UnionToIntersection3708<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3708<T extends unknown[], V> = [...T, V];

type TuplifyUnion3708<T, L = LastOf3708<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3708<TuplifyUnion3708<Exclude<T, L>>, L>;

type DeepPartial3708<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3708<T[P]> }
  : T;

type Paths3708<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3708<K, Paths3708<T[K], Prev3708[D]>> : never }[keyof T]
  : never;

type Prev3708 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3708<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3708 {
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

type ConfigPaths3708 = Paths3708<NestedConfig3708>;

interface HeavyProps3708 {
  config: DeepPartial3708<NestedConfig3708>;
  path?: ConfigPaths3708;
}

const HeavyComponent3708 = memo(function HeavyComponent3708({ config }: HeavyProps3708) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3708) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3708 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3708: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3708.displayName = 'HeavyComponent3708';
export default HeavyComponent3708;
