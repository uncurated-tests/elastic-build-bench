'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly163<T> = T extends (infer U)[]
  ? DeepReadonlyArray163<U>
  : T extends object
  ? DeepReadonlyObject163<T>
  : T;

interface DeepReadonlyArray163<T> extends ReadonlyArray<DeepReadonly163<T>> {}

type DeepReadonlyObject163<T> = {
  readonly [P in keyof T]: DeepReadonly163<T[P]>;
};

type UnionToIntersection163<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf163<T> = UnionToIntersection163<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push163<T extends unknown[], V> = [...T, V];

type TuplifyUnion163<T, L = LastOf163<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push163<TuplifyUnion163<Exclude<T, L>>, L>;

type DeepPartial163<T> = T extends object
  ? { [P in keyof T]?: DeepPartial163<T[P]> }
  : T;

type Paths163<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join163<K, Paths163<T[K], Prev163[D]>> : never }[keyof T]
  : never;

type Prev163 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join163<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig163 {
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

type ConfigPaths163 = Paths163<NestedConfig163>;

interface HeavyProps163 {
  config: DeepPartial163<NestedConfig163>;
  path?: ConfigPaths163;
}

const HeavyComponent163 = memo(function HeavyComponent163({ config }: HeavyProps163) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 163) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-163 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H163: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent163.displayName = 'HeavyComponent163';
export default HeavyComponent163;
