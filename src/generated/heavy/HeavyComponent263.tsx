'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly263<T> = T extends (infer U)[]
  ? DeepReadonlyArray263<U>
  : T extends object
  ? DeepReadonlyObject263<T>
  : T;

interface DeepReadonlyArray263<T> extends ReadonlyArray<DeepReadonly263<T>> {}

type DeepReadonlyObject263<T> = {
  readonly [P in keyof T]: DeepReadonly263<T[P]>;
};

type UnionToIntersection263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf263<T> = UnionToIntersection263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push263<T extends unknown[], V> = [...T, V];

type TuplifyUnion263<T, L = LastOf263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push263<TuplifyUnion263<Exclude<T, L>>, L>;

type DeepPartial263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial263<T[P]> }
  : T;

type Paths263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join263<K, Paths263<T[K], Prev263[D]>> : never }[keyof T]
  : never;

type Prev263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig263 {
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

type ConfigPaths263 = Paths263<NestedConfig263>;

interface HeavyProps263 {
  config: DeepPartial263<NestedConfig263>;
  path?: ConfigPaths263;
}

const HeavyComponent263 = memo(function HeavyComponent263({ config }: HeavyProps263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent263.displayName = 'HeavyComponent263';
export default HeavyComponent263;
