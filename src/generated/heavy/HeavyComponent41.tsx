'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly41<T> = T extends (infer U)[]
  ? DeepReadonlyArray41<U>
  : T extends object
  ? DeepReadonlyObject41<T>
  : T;

interface DeepReadonlyArray41<T> extends ReadonlyArray<DeepReadonly41<T>> {}

type DeepReadonlyObject41<T> = {
  readonly [P in keyof T]: DeepReadonly41<T[P]>;
};

type UnionToIntersection41<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf41<T> = UnionToIntersection41<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push41<T extends unknown[], V> = [...T, V];

type TuplifyUnion41<T, L = LastOf41<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push41<TuplifyUnion41<Exclude<T, L>>, L>;

type DeepPartial41<T> = T extends object
  ? { [P in keyof T]?: DeepPartial41<T[P]> }
  : T;

type Paths41<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join41<K, Paths41<T[K], Prev41[D]>> : never }[keyof T]
  : never;

type Prev41 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join41<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig41 {
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

type ConfigPaths41 = Paths41<NestedConfig41>;

interface HeavyProps41 {
  config: DeepPartial41<NestedConfig41>;
  path?: ConfigPaths41;
}

const HeavyComponent41 = memo(function HeavyComponent41({ config }: HeavyProps41) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 41) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-41 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H41: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent41.displayName = 'HeavyComponent41';
export default HeavyComponent41;
