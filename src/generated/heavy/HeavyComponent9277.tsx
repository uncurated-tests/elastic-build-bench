'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9277<T> = T extends (infer U)[]
  ? DeepReadonlyArray9277<U>
  : T extends object
  ? DeepReadonlyObject9277<T>
  : T;

interface DeepReadonlyArray9277<T> extends ReadonlyArray<DeepReadonly9277<T>> {}

type DeepReadonlyObject9277<T> = {
  readonly [P in keyof T]: DeepReadonly9277<T[P]>;
};

type UnionToIntersection9277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9277<T> = UnionToIntersection9277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9277<T extends unknown[], V> = [...T, V];

type TuplifyUnion9277<T, L = LastOf9277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9277<TuplifyUnion9277<Exclude<T, L>>, L>;

type DeepPartial9277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9277<T[P]> }
  : T;

type Paths9277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9277<K, Paths9277<T[K], Prev9277[D]>> : never }[keyof T]
  : never;

type Prev9277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9277 {
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

type ConfigPaths9277 = Paths9277<NestedConfig9277>;

interface HeavyProps9277 {
  config: DeepPartial9277<NestedConfig9277>;
  path?: ConfigPaths9277;
}

const HeavyComponent9277 = memo(function HeavyComponent9277({ config }: HeavyProps9277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9277.displayName = 'HeavyComponent9277';
export default HeavyComponent9277;
