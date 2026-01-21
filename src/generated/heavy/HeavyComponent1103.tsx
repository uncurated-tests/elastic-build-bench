'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1103<T> = T extends (infer U)[]
  ? DeepReadonlyArray1103<U>
  : T extends object
  ? DeepReadonlyObject1103<T>
  : T;

interface DeepReadonlyArray1103<T> extends ReadonlyArray<DeepReadonly1103<T>> {}

type DeepReadonlyObject1103<T> = {
  readonly [P in keyof T]: DeepReadonly1103<T[P]>;
};

type UnionToIntersection1103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1103<T> = UnionToIntersection1103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1103<T extends unknown[], V> = [...T, V];

type TuplifyUnion1103<T, L = LastOf1103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1103<TuplifyUnion1103<Exclude<T, L>>, L>;

type DeepPartial1103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1103<T[P]> }
  : T;

type Paths1103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1103<K, Paths1103<T[K], Prev1103[D]>> : never }[keyof T]
  : never;

type Prev1103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1103 {
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

type ConfigPaths1103 = Paths1103<NestedConfig1103>;

interface HeavyProps1103 {
  config: DeepPartial1103<NestedConfig1103>;
  path?: ConfigPaths1103;
}

const HeavyComponent1103 = memo(function HeavyComponent1103({ config }: HeavyProps1103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1103.displayName = 'HeavyComponent1103';
export default HeavyComponent1103;
