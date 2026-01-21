'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9265<T> = T extends (infer U)[]
  ? DeepReadonlyArray9265<U>
  : T extends object
  ? DeepReadonlyObject9265<T>
  : T;

interface DeepReadonlyArray9265<T> extends ReadonlyArray<DeepReadonly9265<T>> {}

type DeepReadonlyObject9265<T> = {
  readonly [P in keyof T]: DeepReadonly9265<T[P]>;
};

type UnionToIntersection9265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9265<T> = UnionToIntersection9265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9265<T extends unknown[], V> = [...T, V];

type TuplifyUnion9265<T, L = LastOf9265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9265<TuplifyUnion9265<Exclude<T, L>>, L>;

type DeepPartial9265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9265<T[P]> }
  : T;

type Paths9265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9265<K, Paths9265<T[K], Prev9265[D]>> : never }[keyof T]
  : never;

type Prev9265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9265 {
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

type ConfigPaths9265 = Paths9265<NestedConfig9265>;

interface HeavyProps9265 {
  config: DeepPartial9265<NestedConfig9265>;
  path?: ConfigPaths9265;
}

const HeavyComponent9265 = memo(function HeavyComponent9265({ config }: HeavyProps9265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9265.displayName = 'HeavyComponent9265';
export default HeavyComponent9265;
