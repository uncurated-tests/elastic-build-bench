'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly497<T> = T extends (infer U)[]
  ? DeepReadonlyArray497<U>
  : T extends object
  ? DeepReadonlyObject497<T>
  : T;

interface DeepReadonlyArray497<T> extends ReadonlyArray<DeepReadonly497<T>> {}

type DeepReadonlyObject497<T> = {
  readonly [P in keyof T]: DeepReadonly497<T[P]>;
};

type UnionToIntersection497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf497<T> = UnionToIntersection497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push497<T extends unknown[], V> = [...T, V];

type TuplifyUnion497<T, L = LastOf497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push497<TuplifyUnion497<Exclude<T, L>>, L>;

type DeepPartial497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial497<T[P]> }
  : T;

type Paths497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join497<K, Paths497<T[K], Prev497[D]>> : never }[keyof T]
  : never;

type Prev497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig497 {
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

type ConfigPaths497 = Paths497<NestedConfig497>;

interface HeavyProps497 {
  config: DeepPartial497<NestedConfig497>;
  path?: ConfigPaths497;
}

const HeavyComponent497 = memo(function HeavyComponent497({ config }: HeavyProps497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent497.displayName = 'HeavyComponent497';
export default HeavyComponent497;
