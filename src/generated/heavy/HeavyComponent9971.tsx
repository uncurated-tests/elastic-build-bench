'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9971<T> = T extends (infer U)[]
  ? DeepReadonlyArray9971<U>
  : T extends object
  ? DeepReadonlyObject9971<T>
  : T;

interface DeepReadonlyArray9971<T> extends ReadonlyArray<DeepReadonly9971<T>> {}

type DeepReadonlyObject9971<T> = {
  readonly [P in keyof T]: DeepReadonly9971<T[P]>;
};

type UnionToIntersection9971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9971<T> = UnionToIntersection9971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9971<T extends unknown[], V> = [...T, V];

type TuplifyUnion9971<T, L = LastOf9971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9971<TuplifyUnion9971<Exclude<T, L>>, L>;

type DeepPartial9971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9971<T[P]> }
  : T;

type Paths9971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9971<K, Paths9971<T[K], Prev9971[D]>> : never }[keyof T]
  : never;

type Prev9971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9971 {
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

type ConfigPaths9971 = Paths9971<NestedConfig9971>;

interface HeavyProps9971 {
  config: DeepPartial9971<NestedConfig9971>;
  path?: ConfigPaths9971;
}

const HeavyComponent9971 = memo(function HeavyComponent9971({ config }: HeavyProps9971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9971.displayName = 'HeavyComponent9971';
export default HeavyComponent9971;
