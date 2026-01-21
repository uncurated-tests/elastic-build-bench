'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3536<T> = T extends (infer U)[]
  ? DeepReadonlyArray3536<U>
  : T extends object
  ? DeepReadonlyObject3536<T>
  : T;

interface DeepReadonlyArray3536<T> extends ReadonlyArray<DeepReadonly3536<T>> {}

type DeepReadonlyObject3536<T> = {
  readonly [P in keyof T]: DeepReadonly3536<T[P]>;
};

type UnionToIntersection3536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3536<T> = UnionToIntersection3536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3536<T extends unknown[], V> = [...T, V];

type TuplifyUnion3536<T, L = LastOf3536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3536<TuplifyUnion3536<Exclude<T, L>>, L>;

type DeepPartial3536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3536<T[P]> }
  : T;

type Paths3536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3536<K, Paths3536<T[K], Prev3536[D]>> : never }[keyof T]
  : never;

type Prev3536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3536 {
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

type ConfigPaths3536 = Paths3536<NestedConfig3536>;

interface HeavyProps3536 {
  config: DeepPartial3536<NestedConfig3536>;
  path?: ConfigPaths3536;
}

const HeavyComponent3536 = memo(function HeavyComponent3536({ config }: HeavyProps3536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3536.displayName = 'HeavyComponent3536';
export default HeavyComponent3536;
