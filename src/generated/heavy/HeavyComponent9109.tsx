'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9109<T> = T extends (infer U)[]
  ? DeepReadonlyArray9109<U>
  : T extends object
  ? DeepReadonlyObject9109<T>
  : T;

interface DeepReadonlyArray9109<T> extends ReadonlyArray<DeepReadonly9109<T>> {}

type DeepReadonlyObject9109<T> = {
  readonly [P in keyof T]: DeepReadonly9109<T[P]>;
};

type UnionToIntersection9109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9109<T> = UnionToIntersection9109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9109<T extends unknown[], V> = [...T, V];

type TuplifyUnion9109<T, L = LastOf9109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9109<TuplifyUnion9109<Exclude<T, L>>, L>;

type DeepPartial9109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9109<T[P]> }
  : T;

type Paths9109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9109<K, Paths9109<T[K], Prev9109[D]>> : never }[keyof T]
  : never;

type Prev9109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9109 {
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

type ConfigPaths9109 = Paths9109<NestedConfig9109>;

interface HeavyProps9109 {
  config: DeepPartial9109<NestedConfig9109>;
  path?: ConfigPaths9109;
}

const HeavyComponent9109 = memo(function HeavyComponent9109({ config }: HeavyProps9109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9109.displayName = 'HeavyComponent9109';
export default HeavyComponent9109;
