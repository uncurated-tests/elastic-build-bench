'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3360<T> = T extends (infer U)[]
  ? DeepReadonlyArray3360<U>
  : T extends object
  ? DeepReadonlyObject3360<T>
  : T;

interface DeepReadonlyArray3360<T> extends ReadonlyArray<DeepReadonly3360<T>> {}

type DeepReadonlyObject3360<T> = {
  readonly [P in keyof T]: DeepReadonly3360<T[P]>;
};

type UnionToIntersection3360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3360<T> = UnionToIntersection3360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3360<T extends unknown[], V> = [...T, V];

type TuplifyUnion3360<T, L = LastOf3360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3360<TuplifyUnion3360<Exclude<T, L>>, L>;

type DeepPartial3360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3360<T[P]> }
  : T;

type Paths3360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3360<K, Paths3360<T[K], Prev3360[D]>> : never }[keyof T]
  : never;

type Prev3360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3360 {
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

type ConfigPaths3360 = Paths3360<NestedConfig3360>;

interface HeavyProps3360 {
  config: DeepPartial3360<NestedConfig3360>;
  path?: ConfigPaths3360;
}

const HeavyComponent3360 = memo(function HeavyComponent3360({ config }: HeavyProps3360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3360.displayName = 'HeavyComponent3360';
export default HeavyComponent3360;
