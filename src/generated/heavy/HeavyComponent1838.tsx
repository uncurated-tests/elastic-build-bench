'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1838<T> = T extends (infer U)[]
  ? DeepReadonlyArray1838<U>
  : T extends object
  ? DeepReadonlyObject1838<T>
  : T;

interface DeepReadonlyArray1838<T> extends ReadonlyArray<DeepReadonly1838<T>> {}

type DeepReadonlyObject1838<T> = {
  readonly [P in keyof T]: DeepReadonly1838<T[P]>;
};

type UnionToIntersection1838<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1838<T> = UnionToIntersection1838<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1838<T extends unknown[], V> = [...T, V];

type TuplifyUnion1838<T, L = LastOf1838<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1838<TuplifyUnion1838<Exclude<T, L>>, L>;

type DeepPartial1838<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1838<T[P]> }
  : T;

type Paths1838<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1838<K, Paths1838<T[K], Prev1838[D]>> : never }[keyof T]
  : never;

type Prev1838 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1838<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1838 {
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

type ConfigPaths1838 = Paths1838<NestedConfig1838>;

interface HeavyProps1838 {
  config: DeepPartial1838<NestedConfig1838>;
  path?: ConfigPaths1838;
}

const HeavyComponent1838 = memo(function HeavyComponent1838({ config }: HeavyProps1838) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1838) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1838 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1838: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1838.displayName = 'HeavyComponent1838';
export default HeavyComponent1838;
