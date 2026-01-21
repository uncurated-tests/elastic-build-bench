'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1228<T> = T extends (infer U)[]
  ? DeepReadonlyArray1228<U>
  : T extends object
  ? DeepReadonlyObject1228<T>
  : T;

interface DeepReadonlyArray1228<T> extends ReadonlyArray<DeepReadonly1228<T>> {}

type DeepReadonlyObject1228<T> = {
  readonly [P in keyof T]: DeepReadonly1228<T[P]>;
};

type UnionToIntersection1228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1228<T> = UnionToIntersection1228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1228<T extends unknown[], V> = [...T, V];

type TuplifyUnion1228<T, L = LastOf1228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1228<TuplifyUnion1228<Exclude<T, L>>, L>;

type DeepPartial1228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1228<T[P]> }
  : T;

type Paths1228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1228<K, Paths1228<T[K], Prev1228[D]>> : never }[keyof T]
  : never;

type Prev1228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1228 {
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

type ConfigPaths1228 = Paths1228<NestedConfig1228>;

interface HeavyProps1228 {
  config: DeepPartial1228<NestedConfig1228>;
  path?: ConfigPaths1228;
}

const HeavyComponent1228 = memo(function HeavyComponent1228({ config }: HeavyProps1228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1228.displayName = 'HeavyComponent1228';
export default HeavyComponent1228;
