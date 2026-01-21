'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly423<T> = T extends (infer U)[]
  ? DeepReadonlyArray423<U>
  : T extends object
  ? DeepReadonlyObject423<T>
  : T;

interface DeepReadonlyArray423<T> extends ReadonlyArray<DeepReadonly423<T>> {}

type DeepReadonlyObject423<T> = {
  readonly [P in keyof T]: DeepReadonly423<T[P]>;
};

type UnionToIntersection423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf423<T> = UnionToIntersection423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push423<T extends unknown[], V> = [...T, V];

type TuplifyUnion423<T, L = LastOf423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push423<TuplifyUnion423<Exclude<T, L>>, L>;

type DeepPartial423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial423<T[P]> }
  : T;

type Paths423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join423<K, Paths423<T[K], Prev423[D]>> : never }[keyof T]
  : never;

type Prev423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig423 {
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

type ConfigPaths423 = Paths423<NestedConfig423>;

interface HeavyProps423 {
  config: DeepPartial423<NestedConfig423>;
  path?: ConfigPaths423;
}

const HeavyComponent423 = memo(function HeavyComponent423({ config }: HeavyProps423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent423.displayName = 'HeavyComponent423';
export default HeavyComponent423;
