'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly525<T> = T extends (infer U)[]
  ? DeepReadonlyArray525<U>
  : T extends object
  ? DeepReadonlyObject525<T>
  : T;

interface DeepReadonlyArray525<T> extends ReadonlyArray<DeepReadonly525<T>> {}

type DeepReadonlyObject525<T> = {
  readonly [P in keyof T]: DeepReadonly525<T[P]>;
};

type UnionToIntersection525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf525<T> = UnionToIntersection525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push525<T extends unknown[], V> = [...T, V];

type TuplifyUnion525<T, L = LastOf525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push525<TuplifyUnion525<Exclude<T, L>>, L>;

type DeepPartial525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial525<T[P]> }
  : T;

type Paths525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join525<K, Paths525<T[K], Prev525[D]>> : never }[keyof T]
  : never;

type Prev525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig525 {
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

type ConfigPaths525 = Paths525<NestedConfig525>;

interface HeavyProps525 {
  config: DeepPartial525<NestedConfig525>;
  path?: ConfigPaths525;
}

const HeavyComponent525 = memo(function HeavyComponent525({ config }: HeavyProps525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent525.displayName = 'HeavyComponent525';
export default HeavyComponent525;
