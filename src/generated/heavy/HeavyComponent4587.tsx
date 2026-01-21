'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4587<T> = T extends (infer U)[]
  ? DeepReadonlyArray4587<U>
  : T extends object
  ? DeepReadonlyObject4587<T>
  : T;

interface DeepReadonlyArray4587<T> extends ReadonlyArray<DeepReadonly4587<T>> {}

type DeepReadonlyObject4587<T> = {
  readonly [P in keyof T]: DeepReadonly4587<T[P]>;
};

type UnionToIntersection4587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4587<T> = UnionToIntersection4587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4587<T extends unknown[], V> = [...T, V];

type TuplifyUnion4587<T, L = LastOf4587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4587<TuplifyUnion4587<Exclude<T, L>>, L>;

type DeepPartial4587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4587<T[P]> }
  : T;

type Paths4587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4587<K, Paths4587<T[K], Prev4587[D]>> : never }[keyof T]
  : never;

type Prev4587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4587 {
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

type ConfigPaths4587 = Paths4587<NestedConfig4587>;

interface HeavyProps4587 {
  config: DeepPartial4587<NestedConfig4587>;
  path?: ConfigPaths4587;
}

const HeavyComponent4587 = memo(function HeavyComponent4587({ config }: HeavyProps4587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4587.displayName = 'HeavyComponent4587';
export default HeavyComponent4587;
