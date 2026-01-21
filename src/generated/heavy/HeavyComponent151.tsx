'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly151<T> = T extends (infer U)[]
  ? DeepReadonlyArray151<U>
  : T extends object
  ? DeepReadonlyObject151<T>
  : T;

interface DeepReadonlyArray151<T> extends ReadonlyArray<DeepReadonly151<T>> {}

type DeepReadonlyObject151<T> = {
  readonly [P in keyof T]: DeepReadonly151<T[P]>;
};

type UnionToIntersection151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf151<T> = UnionToIntersection151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push151<T extends unknown[], V> = [...T, V];

type TuplifyUnion151<T, L = LastOf151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push151<TuplifyUnion151<Exclude<T, L>>, L>;

type DeepPartial151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial151<T[P]> }
  : T;

type Paths151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join151<K, Paths151<T[K], Prev151[D]>> : never }[keyof T]
  : never;

type Prev151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig151 {
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

type ConfigPaths151 = Paths151<NestedConfig151>;

interface HeavyProps151 {
  config: DeepPartial151<NestedConfig151>;
  path?: ConfigPaths151;
}

const HeavyComponent151 = memo(function HeavyComponent151({ config }: HeavyProps151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent151.displayName = 'HeavyComponent151';
export default HeavyComponent151;
