'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly348<T> = T extends (infer U)[]
  ? DeepReadonlyArray348<U>
  : T extends object
  ? DeepReadonlyObject348<T>
  : T;

interface DeepReadonlyArray348<T> extends ReadonlyArray<DeepReadonly348<T>> {}

type DeepReadonlyObject348<T> = {
  readonly [P in keyof T]: DeepReadonly348<T[P]>;
};

type UnionToIntersection348<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf348<T> = UnionToIntersection348<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push348<T extends unknown[], V> = [...T, V];

type TuplifyUnion348<T, L = LastOf348<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push348<TuplifyUnion348<Exclude<T, L>>, L>;

type DeepPartial348<T> = T extends object
  ? { [P in keyof T]?: DeepPartial348<T[P]> }
  : T;

type Paths348<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join348<K, Paths348<T[K], Prev348[D]>> : never }[keyof T]
  : never;

type Prev348 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join348<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig348 {
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

type ConfigPaths348 = Paths348<NestedConfig348>;

interface HeavyProps348 {
  config: DeepPartial348<NestedConfig348>;
  path?: ConfigPaths348;
}

const HeavyComponent348 = memo(function HeavyComponent348({ config }: HeavyProps348) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 348) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-348 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H348: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent348.displayName = 'HeavyComponent348';
export default HeavyComponent348;
