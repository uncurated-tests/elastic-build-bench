'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly236<T> = T extends (infer U)[]
  ? DeepReadonlyArray236<U>
  : T extends object
  ? DeepReadonlyObject236<T>
  : T;

interface DeepReadonlyArray236<T> extends ReadonlyArray<DeepReadonly236<T>> {}

type DeepReadonlyObject236<T> = {
  readonly [P in keyof T]: DeepReadonly236<T[P]>;
};

type UnionToIntersection236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf236<T> = UnionToIntersection236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push236<T extends unknown[], V> = [...T, V];

type TuplifyUnion236<T, L = LastOf236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push236<TuplifyUnion236<Exclude<T, L>>, L>;

type DeepPartial236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial236<T[P]> }
  : T;

type Paths236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join236<K, Paths236<T[K], Prev236[D]>> : never }[keyof T]
  : never;

type Prev236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig236 {
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

type ConfigPaths236 = Paths236<NestedConfig236>;

interface HeavyProps236 {
  config: DeepPartial236<NestedConfig236>;
  path?: ConfigPaths236;
}

const HeavyComponent236 = memo(function HeavyComponent236({ config }: HeavyProps236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent236.displayName = 'HeavyComponent236';
export default HeavyComponent236;
