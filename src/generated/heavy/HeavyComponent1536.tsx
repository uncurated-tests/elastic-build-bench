'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1536<T> = T extends (infer U)[]
  ? DeepReadonlyArray1536<U>
  : T extends object
  ? DeepReadonlyObject1536<T>
  : T;

interface DeepReadonlyArray1536<T> extends ReadonlyArray<DeepReadonly1536<T>> {}

type DeepReadonlyObject1536<T> = {
  readonly [P in keyof T]: DeepReadonly1536<T[P]>;
};

type UnionToIntersection1536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1536<T> = UnionToIntersection1536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1536<T extends unknown[], V> = [...T, V];

type TuplifyUnion1536<T, L = LastOf1536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1536<TuplifyUnion1536<Exclude<T, L>>, L>;

type DeepPartial1536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1536<T[P]> }
  : T;

type Paths1536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1536<K, Paths1536<T[K], Prev1536[D]>> : never }[keyof T]
  : never;

type Prev1536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1536 {
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

type ConfigPaths1536 = Paths1536<NestedConfig1536>;

interface HeavyProps1536 {
  config: DeepPartial1536<NestedConfig1536>;
  path?: ConfigPaths1536;
}

const HeavyComponent1536 = memo(function HeavyComponent1536({ config }: HeavyProps1536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1536.displayName = 'HeavyComponent1536';
export default HeavyComponent1536;
