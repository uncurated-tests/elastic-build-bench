'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9270<T> = T extends (infer U)[]
  ? DeepReadonlyArray9270<U>
  : T extends object
  ? DeepReadonlyObject9270<T>
  : T;

interface DeepReadonlyArray9270<T> extends ReadonlyArray<DeepReadonly9270<T>> {}

type DeepReadonlyObject9270<T> = {
  readonly [P in keyof T]: DeepReadonly9270<T[P]>;
};

type UnionToIntersection9270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9270<T> = UnionToIntersection9270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9270<T extends unknown[], V> = [...T, V];

type TuplifyUnion9270<T, L = LastOf9270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9270<TuplifyUnion9270<Exclude<T, L>>, L>;

type DeepPartial9270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9270<T[P]> }
  : T;

type Paths9270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9270<K, Paths9270<T[K], Prev9270[D]>> : never }[keyof T]
  : never;

type Prev9270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9270 {
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

type ConfigPaths9270 = Paths9270<NestedConfig9270>;

interface HeavyProps9270 {
  config: DeepPartial9270<NestedConfig9270>;
  path?: ConfigPaths9270;
}

const HeavyComponent9270 = memo(function HeavyComponent9270({ config }: HeavyProps9270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9270.displayName = 'HeavyComponent9270';
export default HeavyComponent9270;
