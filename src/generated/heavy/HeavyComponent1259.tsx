'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1259<T> = T extends (infer U)[]
  ? DeepReadonlyArray1259<U>
  : T extends object
  ? DeepReadonlyObject1259<T>
  : T;

interface DeepReadonlyArray1259<T> extends ReadonlyArray<DeepReadonly1259<T>> {}

type DeepReadonlyObject1259<T> = {
  readonly [P in keyof T]: DeepReadonly1259<T[P]>;
};

type UnionToIntersection1259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1259<T> = UnionToIntersection1259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1259<T extends unknown[], V> = [...T, V];

type TuplifyUnion1259<T, L = LastOf1259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1259<TuplifyUnion1259<Exclude<T, L>>, L>;

type DeepPartial1259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1259<T[P]> }
  : T;

type Paths1259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1259<K, Paths1259<T[K], Prev1259[D]>> : never }[keyof T]
  : never;

type Prev1259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1259 {
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

type ConfigPaths1259 = Paths1259<NestedConfig1259>;

interface HeavyProps1259 {
  config: DeepPartial1259<NestedConfig1259>;
  path?: ConfigPaths1259;
}

const HeavyComponent1259 = memo(function HeavyComponent1259({ config }: HeavyProps1259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1259.displayName = 'HeavyComponent1259';
export default HeavyComponent1259;
