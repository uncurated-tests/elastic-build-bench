'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9976<T> = T extends (infer U)[]
  ? DeepReadonlyArray9976<U>
  : T extends object
  ? DeepReadonlyObject9976<T>
  : T;

interface DeepReadonlyArray9976<T> extends ReadonlyArray<DeepReadonly9976<T>> {}

type DeepReadonlyObject9976<T> = {
  readonly [P in keyof T]: DeepReadonly9976<T[P]>;
};

type UnionToIntersection9976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9976<T> = UnionToIntersection9976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9976<T extends unknown[], V> = [...T, V];

type TuplifyUnion9976<T, L = LastOf9976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9976<TuplifyUnion9976<Exclude<T, L>>, L>;

type DeepPartial9976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9976<T[P]> }
  : T;

type Paths9976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9976<K, Paths9976<T[K], Prev9976[D]>> : never }[keyof T]
  : never;

type Prev9976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9976 {
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

type ConfigPaths9976 = Paths9976<NestedConfig9976>;

interface HeavyProps9976 {
  config: DeepPartial9976<NestedConfig9976>;
  path?: ConfigPaths9976;
}

const HeavyComponent9976 = memo(function HeavyComponent9976({ config }: HeavyProps9976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9976.displayName = 'HeavyComponent9976';
export default HeavyComponent9976;
