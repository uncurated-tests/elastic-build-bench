'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9586<T> = T extends (infer U)[]
  ? DeepReadonlyArray9586<U>
  : T extends object
  ? DeepReadonlyObject9586<T>
  : T;

interface DeepReadonlyArray9586<T> extends ReadonlyArray<DeepReadonly9586<T>> {}

type DeepReadonlyObject9586<T> = {
  readonly [P in keyof T]: DeepReadonly9586<T[P]>;
};

type UnionToIntersection9586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9586<T> = UnionToIntersection9586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9586<T extends unknown[], V> = [...T, V];

type TuplifyUnion9586<T, L = LastOf9586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9586<TuplifyUnion9586<Exclude<T, L>>, L>;

type DeepPartial9586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9586<T[P]> }
  : T;

type Paths9586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9586<K, Paths9586<T[K], Prev9586[D]>> : never }[keyof T]
  : never;

type Prev9586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9586 {
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

type ConfigPaths9586 = Paths9586<NestedConfig9586>;

interface HeavyProps9586 {
  config: DeepPartial9586<NestedConfig9586>;
  path?: ConfigPaths9586;
}

const HeavyComponent9586 = memo(function HeavyComponent9586({ config }: HeavyProps9586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9586.displayName = 'HeavyComponent9586';
export default HeavyComponent9586;
