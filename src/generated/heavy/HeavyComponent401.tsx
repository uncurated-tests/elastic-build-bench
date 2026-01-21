'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly401<T> = T extends (infer U)[]
  ? DeepReadonlyArray401<U>
  : T extends object
  ? DeepReadonlyObject401<T>
  : T;

interface DeepReadonlyArray401<T> extends ReadonlyArray<DeepReadonly401<T>> {}

type DeepReadonlyObject401<T> = {
  readonly [P in keyof T]: DeepReadonly401<T[P]>;
};

type UnionToIntersection401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf401<T> = UnionToIntersection401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push401<T extends unknown[], V> = [...T, V];

type TuplifyUnion401<T, L = LastOf401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push401<TuplifyUnion401<Exclude<T, L>>, L>;

type DeepPartial401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial401<T[P]> }
  : T;

type Paths401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join401<K, Paths401<T[K], Prev401[D]>> : never }[keyof T]
  : never;

type Prev401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig401 {
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

type ConfigPaths401 = Paths401<NestedConfig401>;

interface HeavyProps401 {
  config: DeepPartial401<NestedConfig401>;
  path?: ConfigPaths401;
}

const HeavyComponent401 = memo(function HeavyComponent401({ config }: HeavyProps401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent401.displayName = 'HeavyComponent401';
export default HeavyComponent401;
