'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1410<T> = T extends (infer U)[]
  ? DeepReadonlyArray1410<U>
  : T extends object
  ? DeepReadonlyObject1410<T>
  : T;

interface DeepReadonlyArray1410<T> extends ReadonlyArray<DeepReadonly1410<T>> {}

type DeepReadonlyObject1410<T> = {
  readonly [P in keyof T]: DeepReadonly1410<T[P]>;
};

type UnionToIntersection1410<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1410<T> = UnionToIntersection1410<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1410<T extends unknown[], V> = [...T, V];

type TuplifyUnion1410<T, L = LastOf1410<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1410<TuplifyUnion1410<Exclude<T, L>>, L>;

type DeepPartial1410<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1410<T[P]> }
  : T;

type Paths1410<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1410<K, Paths1410<T[K], Prev1410[D]>> : never }[keyof T]
  : never;

type Prev1410 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1410<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1410 {
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

type ConfigPaths1410 = Paths1410<NestedConfig1410>;

interface HeavyProps1410 {
  config: DeepPartial1410<NestedConfig1410>;
  path?: ConfigPaths1410;
}

const HeavyComponent1410 = memo(function HeavyComponent1410({ config }: HeavyProps1410) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1410) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1410 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1410: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1410.displayName = 'HeavyComponent1410';
export default HeavyComponent1410;
