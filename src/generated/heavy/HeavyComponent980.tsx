'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly980<T> = T extends (infer U)[]
  ? DeepReadonlyArray980<U>
  : T extends object
  ? DeepReadonlyObject980<T>
  : T;

interface DeepReadonlyArray980<T> extends ReadonlyArray<DeepReadonly980<T>> {}

type DeepReadonlyObject980<T> = {
  readonly [P in keyof T]: DeepReadonly980<T[P]>;
};

type UnionToIntersection980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf980<T> = UnionToIntersection980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push980<T extends unknown[], V> = [...T, V];

type TuplifyUnion980<T, L = LastOf980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push980<TuplifyUnion980<Exclude<T, L>>, L>;

type DeepPartial980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial980<T[P]> }
  : T;

type Paths980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join980<K, Paths980<T[K], Prev980[D]>> : never }[keyof T]
  : never;

type Prev980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig980 {
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

type ConfigPaths980 = Paths980<NestedConfig980>;

interface HeavyProps980 {
  config: DeepPartial980<NestedConfig980>;
  path?: ConfigPaths980;
}

const HeavyComponent980 = memo(function HeavyComponent980({ config }: HeavyProps980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent980.displayName = 'HeavyComponent980';
export default HeavyComponent980;
