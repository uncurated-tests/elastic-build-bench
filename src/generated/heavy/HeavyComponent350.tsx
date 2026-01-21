'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly350<T> = T extends (infer U)[]
  ? DeepReadonlyArray350<U>
  : T extends object
  ? DeepReadonlyObject350<T>
  : T;

interface DeepReadonlyArray350<T> extends ReadonlyArray<DeepReadonly350<T>> {}

type DeepReadonlyObject350<T> = {
  readonly [P in keyof T]: DeepReadonly350<T[P]>;
};

type UnionToIntersection350<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf350<T> = UnionToIntersection350<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push350<T extends unknown[], V> = [...T, V];

type TuplifyUnion350<T, L = LastOf350<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push350<TuplifyUnion350<Exclude<T, L>>, L>;

type DeepPartial350<T> = T extends object
  ? { [P in keyof T]?: DeepPartial350<T[P]> }
  : T;

type Paths350<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join350<K, Paths350<T[K], Prev350[D]>> : never }[keyof T]
  : never;

type Prev350 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join350<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig350 {
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

type ConfigPaths350 = Paths350<NestedConfig350>;

interface HeavyProps350 {
  config: DeepPartial350<NestedConfig350>;
  path?: ConfigPaths350;
}

const HeavyComponent350 = memo(function HeavyComponent350({ config }: HeavyProps350) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 350) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-350 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H350: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent350.displayName = 'HeavyComponent350';
export default HeavyComponent350;
