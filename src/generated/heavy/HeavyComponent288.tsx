'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly288<T> = T extends (infer U)[]
  ? DeepReadonlyArray288<U>
  : T extends object
  ? DeepReadonlyObject288<T>
  : T;

interface DeepReadonlyArray288<T> extends ReadonlyArray<DeepReadonly288<T>> {}

type DeepReadonlyObject288<T> = {
  readonly [P in keyof T]: DeepReadonly288<T[P]>;
};

type UnionToIntersection288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf288<T> = UnionToIntersection288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push288<T extends unknown[], V> = [...T, V];

type TuplifyUnion288<T, L = LastOf288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push288<TuplifyUnion288<Exclude<T, L>>, L>;

type DeepPartial288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial288<T[P]> }
  : T;

type Paths288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join288<K, Paths288<T[K], Prev288[D]>> : never }[keyof T]
  : never;

type Prev288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig288 {
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

type ConfigPaths288 = Paths288<NestedConfig288>;

interface HeavyProps288 {
  config: DeepPartial288<NestedConfig288>;
  path?: ConfigPaths288;
}

const HeavyComponent288 = memo(function HeavyComponent288({ config }: HeavyProps288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent288.displayName = 'HeavyComponent288';
export default HeavyComponent288;
