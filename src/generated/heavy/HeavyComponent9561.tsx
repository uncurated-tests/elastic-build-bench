'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9561<T> = T extends (infer U)[]
  ? DeepReadonlyArray9561<U>
  : T extends object
  ? DeepReadonlyObject9561<T>
  : T;

interface DeepReadonlyArray9561<T> extends ReadonlyArray<DeepReadonly9561<T>> {}

type DeepReadonlyObject9561<T> = {
  readonly [P in keyof T]: DeepReadonly9561<T[P]>;
};

type UnionToIntersection9561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9561<T> = UnionToIntersection9561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9561<T extends unknown[], V> = [...T, V];

type TuplifyUnion9561<T, L = LastOf9561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9561<TuplifyUnion9561<Exclude<T, L>>, L>;

type DeepPartial9561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9561<T[P]> }
  : T;

type Paths9561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9561<K, Paths9561<T[K], Prev9561[D]>> : never }[keyof T]
  : never;

type Prev9561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9561 {
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

type ConfigPaths9561 = Paths9561<NestedConfig9561>;

interface HeavyProps9561 {
  config: DeepPartial9561<NestedConfig9561>;
  path?: ConfigPaths9561;
}

const HeavyComponent9561 = memo(function HeavyComponent9561({ config }: HeavyProps9561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9561.displayName = 'HeavyComponent9561';
export default HeavyComponent9561;
