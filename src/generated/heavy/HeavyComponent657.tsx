'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly657<T> = T extends (infer U)[]
  ? DeepReadonlyArray657<U>
  : T extends object
  ? DeepReadonlyObject657<T>
  : T;

interface DeepReadonlyArray657<T> extends ReadonlyArray<DeepReadonly657<T>> {}

type DeepReadonlyObject657<T> = {
  readonly [P in keyof T]: DeepReadonly657<T[P]>;
};

type UnionToIntersection657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf657<T> = UnionToIntersection657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push657<T extends unknown[], V> = [...T, V];

type TuplifyUnion657<T, L = LastOf657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push657<TuplifyUnion657<Exclude<T, L>>, L>;

type DeepPartial657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial657<T[P]> }
  : T;

type Paths657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join657<K, Paths657<T[K], Prev657[D]>> : never }[keyof T]
  : never;

type Prev657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig657 {
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

type ConfigPaths657 = Paths657<NestedConfig657>;

interface HeavyProps657 {
  config: DeepPartial657<NestedConfig657>;
  path?: ConfigPaths657;
}

const HeavyComponent657 = memo(function HeavyComponent657({ config }: HeavyProps657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent657.displayName = 'HeavyComponent657';
export default HeavyComponent657;
