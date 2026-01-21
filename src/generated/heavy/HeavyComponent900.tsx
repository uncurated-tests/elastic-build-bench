'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly900<T> = T extends (infer U)[]
  ? DeepReadonlyArray900<U>
  : T extends object
  ? DeepReadonlyObject900<T>
  : T;

interface DeepReadonlyArray900<T> extends ReadonlyArray<DeepReadonly900<T>> {}

type DeepReadonlyObject900<T> = {
  readonly [P in keyof T]: DeepReadonly900<T[P]>;
};

type UnionToIntersection900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf900<T> = UnionToIntersection900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push900<T extends unknown[], V> = [...T, V];

type TuplifyUnion900<T, L = LastOf900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push900<TuplifyUnion900<Exclude<T, L>>, L>;

type DeepPartial900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial900<T[P]> }
  : T;

type Paths900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join900<K, Paths900<T[K], Prev900[D]>> : never }[keyof T]
  : never;

type Prev900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig900 {
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

type ConfigPaths900 = Paths900<NestedConfig900>;

interface HeavyProps900 {
  config: DeepPartial900<NestedConfig900>;
  path?: ConfigPaths900;
}

const HeavyComponent900 = memo(function HeavyComponent900({ config }: HeavyProps900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent900.displayName = 'HeavyComponent900';
export default HeavyComponent900;
