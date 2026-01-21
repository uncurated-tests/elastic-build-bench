'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1223<T> = T extends (infer U)[]
  ? DeepReadonlyArray1223<U>
  : T extends object
  ? DeepReadonlyObject1223<T>
  : T;

interface DeepReadonlyArray1223<T> extends ReadonlyArray<DeepReadonly1223<T>> {}

type DeepReadonlyObject1223<T> = {
  readonly [P in keyof T]: DeepReadonly1223<T[P]>;
};

type UnionToIntersection1223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1223<T> = UnionToIntersection1223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1223<T extends unknown[], V> = [...T, V];

type TuplifyUnion1223<T, L = LastOf1223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1223<TuplifyUnion1223<Exclude<T, L>>, L>;

type DeepPartial1223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1223<T[P]> }
  : T;

type Paths1223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1223<K, Paths1223<T[K], Prev1223[D]>> : never }[keyof T]
  : never;

type Prev1223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1223 {
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

type ConfigPaths1223 = Paths1223<NestedConfig1223>;

interface HeavyProps1223 {
  config: DeepPartial1223<NestedConfig1223>;
  path?: ConfigPaths1223;
}

const HeavyComponent1223 = memo(function HeavyComponent1223({ config }: HeavyProps1223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1223.displayName = 'HeavyComponent1223';
export default HeavyComponent1223;
