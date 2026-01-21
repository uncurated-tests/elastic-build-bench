'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12980<T> = T extends (infer U)[]
  ? DeepReadonlyArray12980<U>
  : T extends object
  ? DeepReadonlyObject12980<T>
  : T;

interface DeepReadonlyArray12980<T> extends ReadonlyArray<DeepReadonly12980<T>> {}

type DeepReadonlyObject12980<T> = {
  readonly [P in keyof T]: DeepReadonly12980<T[P]>;
};

type UnionToIntersection12980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12980<T> = UnionToIntersection12980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12980<T extends unknown[], V> = [...T, V];

type TuplifyUnion12980<T, L = LastOf12980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12980<TuplifyUnion12980<Exclude<T, L>>, L>;

type DeepPartial12980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12980<T[P]> }
  : T;

type Paths12980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12980<K, Paths12980<T[K], Prev12980[D]>> : never }[keyof T]
  : never;

type Prev12980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12980 {
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

type ConfigPaths12980 = Paths12980<NestedConfig12980>;

interface HeavyProps12980 {
  config: DeepPartial12980<NestedConfig12980>;
  path?: ConfigPaths12980;
}

const HeavyComponent12980 = memo(function HeavyComponent12980({ config }: HeavyProps12980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12980.displayName = 'HeavyComponent12980';
export default HeavyComponent12980;
