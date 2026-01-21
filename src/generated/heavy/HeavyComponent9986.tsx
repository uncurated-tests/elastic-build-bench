'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9986<T> = T extends (infer U)[]
  ? DeepReadonlyArray9986<U>
  : T extends object
  ? DeepReadonlyObject9986<T>
  : T;

interface DeepReadonlyArray9986<T> extends ReadonlyArray<DeepReadonly9986<T>> {}

type DeepReadonlyObject9986<T> = {
  readonly [P in keyof T]: DeepReadonly9986<T[P]>;
};

type UnionToIntersection9986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9986<T> = UnionToIntersection9986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9986<T extends unknown[], V> = [...T, V];

type TuplifyUnion9986<T, L = LastOf9986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9986<TuplifyUnion9986<Exclude<T, L>>, L>;

type DeepPartial9986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9986<T[P]> }
  : T;

type Paths9986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9986<K, Paths9986<T[K], Prev9986[D]>> : never }[keyof T]
  : never;

type Prev9986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9986 {
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

type ConfigPaths9986 = Paths9986<NestedConfig9986>;

interface HeavyProps9986 {
  config: DeepPartial9986<NestedConfig9986>;
  path?: ConfigPaths9986;
}

const HeavyComponent9986 = memo(function HeavyComponent9986({ config }: HeavyProps9986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9986.displayName = 'HeavyComponent9986';
export default HeavyComponent9986;
