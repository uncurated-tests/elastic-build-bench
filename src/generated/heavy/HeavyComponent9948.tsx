'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9948<T> = T extends (infer U)[]
  ? DeepReadonlyArray9948<U>
  : T extends object
  ? DeepReadonlyObject9948<T>
  : T;

interface DeepReadonlyArray9948<T> extends ReadonlyArray<DeepReadonly9948<T>> {}

type DeepReadonlyObject9948<T> = {
  readonly [P in keyof T]: DeepReadonly9948<T[P]>;
};

type UnionToIntersection9948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9948<T> = UnionToIntersection9948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9948<T extends unknown[], V> = [...T, V];

type TuplifyUnion9948<T, L = LastOf9948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9948<TuplifyUnion9948<Exclude<T, L>>, L>;

type DeepPartial9948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9948<T[P]> }
  : T;

type Paths9948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9948<K, Paths9948<T[K], Prev9948[D]>> : never }[keyof T]
  : never;

type Prev9948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9948 {
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

type ConfigPaths9948 = Paths9948<NestedConfig9948>;

interface HeavyProps9948 {
  config: DeepPartial9948<NestedConfig9948>;
  path?: ConfigPaths9948;
}

const HeavyComponent9948 = memo(function HeavyComponent9948({ config }: HeavyProps9948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9948.displayName = 'HeavyComponent9948';
export default HeavyComponent9948;
