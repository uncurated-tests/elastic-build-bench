'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly996<T> = T extends (infer U)[]
  ? DeepReadonlyArray996<U>
  : T extends object
  ? DeepReadonlyObject996<T>
  : T;

interface DeepReadonlyArray996<T> extends ReadonlyArray<DeepReadonly996<T>> {}

type DeepReadonlyObject996<T> = {
  readonly [P in keyof T]: DeepReadonly996<T[P]>;
};

type UnionToIntersection996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf996<T> = UnionToIntersection996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push996<T extends unknown[], V> = [...T, V];

type TuplifyUnion996<T, L = LastOf996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push996<TuplifyUnion996<Exclude<T, L>>, L>;

type DeepPartial996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial996<T[P]> }
  : T;

type Paths996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join996<K, Paths996<T[K], Prev996[D]>> : never }[keyof T]
  : never;

type Prev996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig996 {
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

type ConfigPaths996 = Paths996<NestedConfig996>;

interface HeavyProps996 {
  config: DeepPartial996<NestedConfig996>;
  path?: ConfigPaths996;
}

const HeavyComponent996 = memo(function HeavyComponent996({ config }: HeavyProps996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent996.displayName = 'HeavyComponent996';
export default HeavyComponent996;
