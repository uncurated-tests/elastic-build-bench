'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly947<T> = T extends (infer U)[]
  ? DeepReadonlyArray947<U>
  : T extends object
  ? DeepReadonlyObject947<T>
  : T;

interface DeepReadonlyArray947<T> extends ReadonlyArray<DeepReadonly947<T>> {}

type DeepReadonlyObject947<T> = {
  readonly [P in keyof T]: DeepReadonly947<T[P]>;
};

type UnionToIntersection947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf947<T> = UnionToIntersection947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push947<T extends unknown[], V> = [...T, V];

type TuplifyUnion947<T, L = LastOf947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push947<TuplifyUnion947<Exclude<T, L>>, L>;

type DeepPartial947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial947<T[P]> }
  : T;

type Paths947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join947<K, Paths947<T[K], Prev947[D]>> : never }[keyof T]
  : never;

type Prev947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig947 {
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

type ConfigPaths947 = Paths947<NestedConfig947>;

interface HeavyProps947 {
  config: DeepPartial947<NestedConfig947>;
  path?: ConfigPaths947;
}

const HeavyComponent947 = memo(function HeavyComponent947({ config }: HeavyProps947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent947.displayName = 'HeavyComponent947';
export default HeavyComponent947;
