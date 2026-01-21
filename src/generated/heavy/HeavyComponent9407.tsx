'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9407<T> = T extends (infer U)[]
  ? DeepReadonlyArray9407<U>
  : T extends object
  ? DeepReadonlyObject9407<T>
  : T;

interface DeepReadonlyArray9407<T> extends ReadonlyArray<DeepReadonly9407<T>> {}

type DeepReadonlyObject9407<T> = {
  readonly [P in keyof T]: DeepReadonly9407<T[P]>;
};

type UnionToIntersection9407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9407<T> = UnionToIntersection9407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9407<T extends unknown[], V> = [...T, V];

type TuplifyUnion9407<T, L = LastOf9407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9407<TuplifyUnion9407<Exclude<T, L>>, L>;

type DeepPartial9407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9407<T[P]> }
  : T;

type Paths9407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9407<K, Paths9407<T[K], Prev9407[D]>> : never }[keyof T]
  : never;

type Prev9407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9407 {
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

type ConfigPaths9407 = Paths9407<NestedConfig9407>;

interface HeavyProps9407 {
  config: DeepPartial9407<NestedConfig9407>;
  path?: ConfigPaths9407;
}

const HeavyComponent9407 = memo(function HeavyComponent9407({ config }: HeavyProps9407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9407.displayName = 'HeavyComponent9407';
export default HeavyComponent9407;
